module.exports = {
    /**
     * Application configuration section
     * http://pm2.keymetrics.io/docs/usage/application-declaration/
     */
    apps : [
  
      // First application
      {
        name      : process.env.API_NAME,
        script    : 'server.express.js',
        instances : "max",
        exec_mode : "cluster" ,
        watch : true,
        node_args: "--max_old_space_size=500",
        env: {
          COMMON_VARIABLE: 'true',
          NODE_ENV: "development",
        },
        env_production : {
          NODE_ENV: 'production'
}
      }
    ]
  };
  