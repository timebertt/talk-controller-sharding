# Introduction

<!-- .slide: data-background-color="#daeaf9" -->

Notes:

- Who has ever used a Kubernetes operator in their clusters?
- Who has ever implemented an operator or custom controller?
- Who runs custom controllers in production?

vvv

## Context

- Managing thousands of clusters at STACKIT Kubernetes Engine
- Based on open source project Gardener
- Running controllers at scale
- Master’s thesis: “Horizontally Scalable Kubernetes Controllers”

<div style="display: flex; align-items: center;">
<div style="width: 50%; object-fit: contain;">
<img alt="STACKIT logo" src="../assets/stackit.svg">
</div>
<div style="width: 50%; object-fit: contain;">
<img alt="Gardener logo" src="../assets/gardener.svg">
</div>
</div>

vvv

## Controller Basics

Controllers facilitate declarative state management:

1. Watch objects for changes
2. Cache objects in memory
3. Enqueue object key on relevant changes
4. Read current state (from cache)
5. Make changes
6. Report observed status

vvv

## Demo

<!-- .slide: data-background-color="#495057" -->

<em>The webhosting-operator</em>
