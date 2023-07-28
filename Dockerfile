#基础镜像
FROM harbor.devops.com/devops/nginx:1.15-alpine
#镜像制作者
MAINTAINER zw zw@ewell.cc

ADD . /web
#切换工作目录
WORKDIR /web
#同步Docker的时区
RUN echo "Asia/Shanghai" > /etc/timezone
#声明需要暴露的接口
EXPOSE 8080

ENTRYPOINT ["nginx","-g","daemon off;"]
