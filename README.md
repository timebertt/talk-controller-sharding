# Beyond the Limits: Scaling Kubernetes Controllers Horizontally

## About

This is a talk by [@timebertt](https://github.com/timebertt) at [ContainerDays 2025](https://www.containerdays.io/) in Hamburg ([event agenda](https://www.containerdays.io/containerdays-conference-2025/agenda/#sz-session-896315)).

### Abstract

Do your Kubernetes controllers struggle to keep up with the demands of your growing infrastructure? As your clusters scale, traditional controller setups face increasing challenges, leading to slow reconciliation times, impacting application performance and overall cluster stability.

This session introduces sharding for Kubernetes controllers as a groundbreaking solution. By horizontally scaling controller workloads across multiple instances, it significantly improves scalability and addresses the inherent limitations of traditional leader election mechanisms.

In this session, we'll dive deep into the technical details of applying proven sharding mechanism from distributed databases to effectively partition controller workloads. We'll explore the underlying concepts and how to implement sharding in your own Kubernetes controllers.

Join us to learn how to overcome the scalability challenges of your Kubernetes controllers and unlock the full potential of your infrastructure.

### Description

While the operator pattern has revolutionized cloud-native applications, the current scalability constraints of Kubernetes controllers limit the full extent of large-scale implementations.
This talk addresses this critical gap, introducing a project that enables horizontal scalability for Kubernetes controllers. With the presented concepts, the audience is empowered to scale their projects, services, and platforms with confidence.
By showcasing practical solutions, the community is enabled to transcend the current limitations of controller-based systems. The talk is not just about the project itself; it’s about pushing the limits of scaling Kubernetes controllers and elevating the entire ecosystem of cloud-native platforms.

### References

- https://github.com/timebertt/kubernetes-controller-sharding
- https://github.com/timebertt/masters-thesis-controller-sharding
