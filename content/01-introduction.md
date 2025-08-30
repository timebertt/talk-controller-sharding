# Introduction

vvv

## Context

- Managing thousands of clusters at STACKIT Kubernetes Engine
- Based on open source project Gardener
- Running controllers at scale
- Master’s thesis: “Horizontally Scalable Kubernetes Controllers”

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
