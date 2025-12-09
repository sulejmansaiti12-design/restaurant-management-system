require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const { sequelize } = require('./config/database');
const sseManager = require('./services/sseManager');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(compression());
app.use(cors({
  origin: process.env.CORS_ORIGIN?.split(',') || '*',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// SSE endpoint
app.get('/api/sse', sseManager.handleConnection);

// API Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/waiters', require('./routes/waiters'));
app.use('/api/orders', require('./routes/orders'));
app.use('/api/shifts', require('./routes/shifts'));
app.use('/api/tables', require('./routes/tables'));
app.use('/api/menu', require('./routes/menu'));
app.use('/api/ratings', require('./routes/ratings'));
app.use('/api/cash', require('./routes/cash'));
app.use('/api/reports', require('./routes/reports'));
app.use('/api/tax', require('./routes/tax'));
app.use('/api/fiscal', require('./routes/fiscal'));
app.use('/api/analytics', require('./routes/analytics'));
app.use('/api/approvals', require('./routes/approvals'));
app.use('/api/qr', require('./routes/qr'));
app.use('/api/clock', require('./routes/clock'));
app.use('/api/zones', require('./routes/zones'));
app.use('/api/printers', require('./routes/printers'));
app.use('/api/service', require('./routes/service'));
app.use('/api/performance', require('./routes/performance'));

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({
    error: err.message || 'Internal server error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

// Start server
const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('✓ Database connected successfully');
    
    app.listen(PORT, () => {
      console.log(`✓ Server running on port ${PORT}`);
      console.log(`✓ Environment: ${process.env.NODE_ENV || 'development'}`);
      console.log(`✓ Health check: http://localhost:${PORT}/health`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();

module.exports = app;
