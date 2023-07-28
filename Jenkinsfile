#!groovy

@Library('MicroserviceBuilder') _
microserviceBuilderPipeline {
    image = 'patweb-pas-ewell'
    tag = 'v4.0.43'
    dockerRegBase = 'harbor.cuhkh.com'
    dockerRegSecret = 'sa-ewellprod-hk'
//    namespace = 'ewellprod'
    build = 'true'
    buildMethod = 'npm'           // maven(default)/npm
    npmImage = 'chart.devops.com/devops/keymetrics/pm2:16-alpine'// npm docker image
    npmInstall = 'true'           // default true
    registry = 'http://192.168.150.59:8081/repository/npm-groupzd/'  // nexus address (needed when npmInstall is true.)
    npmBuild = 'true'            // default true
    deploy = 'true'
    imageType = "1"                // image类型，1前端微服务，2后端微服务，3数据库服务，4基础设施服务，5第三方服务
    imageShowType = "1"            // 镜像显示类型，1前后端微服务，2MQ消息服务，3Redis微服务，4注册中心，5日志服务，6配置中心，7Orcale服务，8MySQL服务 9权限架构服务 10文件上传 11文件下载  12字典服务
    imageDescribe = "中医院患者前端服务"  // 镜像描述
    imagePic = "icon.png"          // 镜像图片名字
    deploymentNameCh = "中医院患者前端服务" //微服务中文名称
    imageStartupType = "0"        //  0默认值表示deployment,1statfullset方式
}
