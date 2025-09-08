# Sharding Design

<!-- .slide: data-background-color="#daeaf9" -->

vvv

## Key Features

- Sharding mechanisms inspired by distributed databases
- Dynamic membership and failure detection
- Automatic failover and rebalancing
- Transparent label-based coordination
- Prevents concurrent reconciliations
- Reusable implementation

vvv

## Architecture

<div class="r-stack r-stretch">
<img alt="Sharding Architecture" src="../assets/architecture.svg" data-preview-image>
<div class="overlay-box fragment fade-in-then-out" style="top: 298px; left: 430px; height: 160px; width: 216px;"></div>
<div class="overlay-box fragment fade-in-then-out" style="top: 298px; left: 430px; height: 160px; width: 672px;"></div>
<div class="overlay-box fragment fade-in-then-out" style="top: 298px; left: 430px; height: 335px; width: 216px;"></div>
<div class="overlay-box fragment fade-in-then-out" style="top: 108px; left: 422px; height: 528px; width: 227px;"></div>
<div class="overlay-box fragment" style="top: 297px; left: 78px; height: 161px; width: 236px;"></div>
<div class="overlay-box fragment" style="top: 106px; left: 78px; height: 123px; width: 236px;"></div>
<div class="overlay-box fragment" style="top: 156px; left: 434px; height: 21px; width: 172px;"></div>
<div class="overlay-box fragment" style="top: 354px; left: 447px; height: 34px; width: 180px;"></div>
</div>

vvv

## Demo

<!-- .slide: data-background-color="#495057" -->

<em>Kubernetes Controller Sharding</em>
