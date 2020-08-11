// must restart server whenever you make changes in next.config
module.exports = {
  env: {
    MONGO_SRV: "mongodb+srv://dbuser1:Testing@cluster0.louud.mongodb.net/apiVibeArmy?retryWrites=true&w=majority",
    JWT_SECRET: "vibearmynewuser",
    CLOUDINARY_URL: "<insert-cloudinary-url>",
    STRIPE_SECRET_KEY: "<insert-stripe-secret-key>"
    
  }
};


