const path =require("path")

module.exports={
    configureWebpack:{
        resolve:{
            alias:{
                "@":path.join(__dirname,"./src"),
                "@api":path.join(__dirname,"./src/api"),
                "@components":path.join(__dirname,"./src/components"),
                "@pages":path.join(__dirname,"./src/pages"),
                "@router":path.join(__dirname,"./src/router"),
                "@store":path.join(__dirname,"./src/store"),
                "@utils":path.join(__dirname,"./src/utils"),

            }
        }
    },
    devServer:{
        proxy:{
            "/han":{
                //代理目标点
                target:"https://api.thebeastshop.com/",
                //允许跨域代理
                changeOrigin:true,
                pathRewrite:{
                    "^/han":""
                }
            }
        }
    }
}