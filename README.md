- portal为基座应用
- subapp1为子应用1
- subapp2为子应用2

# 开发环境启动
1. 安装依赖，进入portal,执行
yarn install:portal
yarn install:subapp1
yarn install:subapp2
2. 启动，执行
yarn start:all

# 测试/生产环境启动-Docker
1. 查看本机实际IP（非127.0.0.1/localhost）docker中需要访问实际IP地址
2. 进入portal,修改nginx.conf文件，将其中的192.168.192.1替换为本机实际IP
3. 打包镜像
cd portal && docker build -t portal:latest .
cd subapp1 && docker build -t subapp1:latest .
cd subapp2 && docker build -t subapp2:latest .
4. 基于镜像创建容器
docker run --restart=always -d -p 8180:80 --name portal portal:latest
docker run --restart=always -d -p 8181:80 --name subapp1 subapp1:latest
docker run --restart=always -d -p 8182:80 --name subapp2 subapp2:latest
