# What's New?

<!-- .slide: data-background-color="#daeaf9" -->

vvv

## Webhosting-Operator

Use `CreateOrPatch` instead of no-op `APPLY` calls

<div class="r-stretch">
<a href="https://github.com/timebertt/kubernetes-controller-sharding/pull/618">
<img alt="Skip no-op apply calls, switch to `CreateOrPatch` by timebertt · Pull Request #618 · timebertt/kubernetes-controller-sharding" src="../assets/webhosting-operator-createorpatch.png" class="r-frame">
</a>
</div> 

vvv

## Performance Improvements

Remove client-side rate limiting ([#610](https://github.com/timebertt/kubernetes-controller-sharding/pull/610)), 
Improve sharder retries ([#636](https://github.com/timebertt/kubernetes-controller-sharding/pull/636)), 
Move and drain objects concurrently ([#637](https://github.com/timebertt/kubernetes-controller-sharding/pull/637))

<div class="r-stretch">
<a href="https://github.com/timebertt/kubernetes-controller-sharding/pull/637">
<img alt="sharder: move and drain objects concurrently by timebertt · Pull Request #637 · timebertt/kubernetes-controller-sharding" src="../assets/sharder-concurrency.png" class="r-frame">
</a>
</div> 

vvv

## Performance Improvements

| Scenario                    | sequential (before) | concurrent (after) |
|-----------------------------|---------------------|--------------------|
| Delete 1 random pod         | 3m49s               | 28s                |
| Scale down from 3 to 2 pods | 2m46s               | 17s                |
| Scale up from 2 to 3 pods   | 2m06s               | 17s                |
<!-- .element: class="table-no-wrap" -->

vvv

## Chaos Experiments

<div class="r-stretch">
<a href="https://github.com/timebertt/kubernetes-controller-sharding/pull/648">
<img alt="Add `chaos` experiment scenario by timebertt · Pull Request #648 · timebertt/kubernetes-controller-sharding" src="../assets/chaos-experiment.png" class="r-frame">
</a>
</div> 

---

# What's Next?
## <em>Where You Can Help</em>

<!-- .slide: data-background-color="#daeaf9" -->

vvv

## Kubebuilder Plugin

<div class="r-stretch">
<a href="https://github.com/kubernetes-sigs/kubebuilder/discussions/4756">
<img alt="Proposal: Integrate Kubernetes Controller Sharding (timebertt/kubernetes-controller-sharding) into Kubebuilder · kubernetes-sigs/kubebuilder · Discussion #4756" src="../assets/kubebuilder-plugin.png" class="r-frame">
</a>
</div>

vvv

## Partitioning by Owner of Owner

<div class="r-stretch">
<a href="https://github.com/timebertt/kubernetes-controller-sharding/issues/664">
<img alt="Multi-level ownership for controller sharding · Issue #664 · timebertt/kubernetes-controller-sharding" src="../assets/multi-level-ownership.png" class="r-frame">
</a>
</div>

vvv

## Stabilize Rolling Updates

<div class="r-stretch">
<a href="https://github.com/timebertt/kubernetes-controller-sharding/issues/672">
<img alt="Deploy sharded controller as `StatefulSet` · Issue #672 · timebertt/kubernetes-controller-sharding" src="../assets/statefulset.png" class="r-frame">
</a>
</div>

vvv

## Horizontal Autoscaling

<div class="r-stretch">
<a href="https://github.com/timebertt/kubernetes-controller-sharding/issues/673">
<img alt="Horizontal autoscaling for sharded controllers · Issue #673 · timebertt/kubernetes-controller-sharding" src="../assets/horizontal-autoscaling.png" class="r-frame">
</a>
</div>
