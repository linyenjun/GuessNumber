# GuessNumber

这是一个react-native的练习

主要的代码都在master里的App.tsx

功能很简单，取乱数，猜0~99的的数字 可以下载之后运行 yarn react-native run-android 查看运行的结果

## 搭建项目

### 1.环境搭建：

https://reactnative.cn/docs/getting-started.html

请务必参考最新版本的搭建环境，并选择自己的计算机支持的作业环境
个人不推荐使用沙盒环境，建议使用稳定版本的最新node进行安装

下载原生的代码指令，当中的AwesomeProject是你的文件夹名称，可以自行更换

$npx react-native init AwesomeProject 

这个指令下的模板没有用typescript，但是也能实现效果

如果要带有typescript，可以用以下指令初始化新的项目，文件夹名称是Guessnumber

$npx react-native init Guessnumber --template react-native-tenplate-typescript


### 2.搭建环境其他的建议：

#### *关于node版本切换：

因为这是一个node驱动的项目，有可能你会有其他在用的node版本，推荐使用nvm进行版本管理

https://github.com/coreybutler/nvm-windows/releases

nvm可以在终端机打开

step1.

傻瓜式的安装之后，可以用nvm查看安装的版本

$nvm 

step2.
安装好，在安装的文件夹找到settings.txt文件，在最后加上淘宝镜像

node_mirror: https://npm.taobao.org/mirrors/node/

npm_mirror: https://npm.taobao.org/mirrors/npm/

step3.
安装之后重启电脑，进行环境变量的配置
settings.txt文件里面有一个root变量，还有一个path的变量

把root变量的路径加到这个环境变量中：
属性---->高级系统设置---->环境变量---->系统变量 
变量名：NVM_HOME

把path变量的路径加到这个环境变量中：
属性---->高级系统设置---->环境变量---->系统变量
变量名：NVM_SYMLINK

完成这个动作之后，再重启电脑

最后，就可以进行node版本的切换了

如果要看当前版本,输入指令可以看到所有安装过的node，正在使用的版本前面有* 

$nvm list

切换版本,例如切换12.0.1版本

$nvm use 12.0.1

#### *关于Android studio模拟器：

可以选择使用真机，但是要重装apk比较麻烦
使用模拟器建议看看笔记本的内存是否有8G，4G内存的笔记本不适合使用Android studio
模拟器可以多设置几个试看看，可以使用比较稳定好用的


### 3.下次启动建议先开启模拟器，再到项目里用这个指令启动

$yarn react-native run-android

如果用

$yarn android 有时会报错，很麻烦



