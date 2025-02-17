
#### DPU池化项目

**项目简介**：基于DPDK实现DPU资源池化以及动态的流迁移，以解决单张DPU带宽不足等性能瓶颈，实现弹性扩展。

**工作内容**：完成了DPU相关工作调研报告，实现了VM-DPU映射的装箱算法并对多种算法进行了模拟评估。

<br>

#### SMORE: Enhancing GPU Utilization in Deep Learning Clusters by Serverless-based Co-location Scheduling

**项目简介**：采用基于无服务器计算的框架优化深度学习集群中GPU的利用率，通过按需分配资源和灵活调度解决协同定位性能退化、SLO保证和冷启动问题。

**工作内容**：实现Prewarmer模块，使用LS-LSTM模型预测到来请求以减少冷启动，并与LSTH、HHP等调度方案对比。

<br>

#### FAASHARE: Enabling Generic Low-Latency and SLO-Aware GPU Sharing in Serverless Computing

**项目简介**：通过引入MSContainer、时空优先队列调度机制和贝叶斯优化实现一个针对无服务器计算的高效平台，旨在解决GPU资源利用低效、任务执行延迟高和SLO违反等问题。

**工作内容**：使用具备离线和在线阶段的贝叶斯优化来为函数分配最优计算资源，解决GPU协同运行中的资源竞争问题。
