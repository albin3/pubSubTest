# 对ioredis/node_redis pub/sub的压力测试

## 版本信息

- node_redis: 0.12.1
- ioredis: 1.7.2

## 设备信息

- OS: OSX 10.10.4
- CPU: 2.4 GHz Intel Core i5
- 内存: 8 GB 1600 MHz DDR3

## 测试方案

测试publish

1. 启动ioredis/node_redis的subscriber并`每十秒打印一次平均执行结果`;
2. 分别启动一个publisher进程，从subscriber看每秒发布的消息数;

测试subscribe

1. 启动ioredis/node_redis的subscriber并`每十秒打印一次平均执行结果`;
2. 启动多个publisher进程，保证publish速度比subscribe快，从subscriber看每秒接收消息数;

## 测试结果

**publish**

命令：
(这里publish没达到subscribe的瓶颈，所以用哪个subscriber没关系)
```sh
$node iopublisher
$node iosubscriber > result/io_publish
&
$node ndpublisher
$node ndsubscriber > result/nd_publish
```

结果：

|对象|数据|
|---|:---:|
|ioredis|40640.16 opt/s|
|node_redis|39326.11 opt/s|

**subscribe**

命令：
```sh
$node bench_io > result/io_subscribe
&
$node bench_nd > result/nd_subscribe
```

结果：

|对象|数据|
|---|:---:|
|ioredis|73555.85 opt/s|
|node_redis|71437.02 opt/s|

曾经本机测到publish 45k opt/s，subscribe 100k opt/s过，相信优化参数的话数据还能上去。
