const mongoose = require("mongoose");
mongoose.connect("mongodb://root:Vmware@192.168.55.24/newmanagement", {
  server: {
    socketOptions: {
      socketTimeoutMS: 0,
      connectionTimeout: 0
    }
  }
});
