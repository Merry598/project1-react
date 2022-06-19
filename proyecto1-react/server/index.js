import express from "express";
import fileUpload from "express";
import path from "path";

import indexRoute from "./routes/indexroutes";
import imagesRoutes from "./routes/images.routes";
import "./database";

const app = express();

app.use(
    fileUpload({
        tempFileDir: "/temp", // put temp directory path here
    })
);

app.set("port", process.env.PORT || 4000);

app.use(indexRoute);
app.use(imagesRoutes);

app.use(express.static(path.join(__dirname, "public")));

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.listen(app.get("port"));

console.log('server on port: ', app.get('port'))