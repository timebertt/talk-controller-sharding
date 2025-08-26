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

## Presenting and Editing the Slides

Slides are built in Markdown using [reveal.js](https://revealjs.com/), packaged with [webpack](https://webpack.js.org/), and deployed with [Netlify](https://www.netlify.com/).

### Prerequisites

Install a recent `node` version. Preferably, the one specified in [`.nvmrc`](./.nvmrc) (e.g., using [nvm](https://github.com/nvm-sh/nvm)).

```bash
nvm use
```

Install the dependencies:
```bash
npm install
```

### Present Locally

Perform a production build and serve the slides from the `dist` folder:

```bash
NODE_ENV=production npm run build
npm run serve
```

Important: Set `NODE_ENV=production` to yield the same build outputs as in production deploys to Netlify.
If you don't set it, the QR will link to a local IP instead of the canonical URL, for example.

### Edit Locally

Run a dev server with hot-reload and open the slides in the browser:

```bash
npm start
```

Alternatively, use the preconfigured `start` run configuration for JetBrains IDEs.

Now, start editing the [content](./content) files.
When saving, slides are automatically rebuilt and refreshed in the browser.

> Note, that `npm start` doesn't write the output to `dist`.

### Build Locally

Run a full build and write output files to `dist`:

```bash
npm run build
```

Now, output files can be inspected in the `dist` folder.
Also, the slides can be served locally from the `dist` folder (no hot-reload):

```bash
npm run serve
```

Using the above will output non-minimized files.
Set `NODE_ENV=production` to enable minimization as it is done in Netlify builds:

```bash
NODE_ENV=production npm run build
```

## Netlify Deploys

Netlify builds and publishes new commits to the `main` branch on https://talk-controller-sharding.netlify.app/.

https://github.com/timebertt/talks contains a [Netlify proxy configuration](https://github.com/timebertt/talks/blob/master/netlify.toml) to make the slides available at https://talks.timebertt.dev/controller-sharding/.

The Netlify site is configured to publish deploy previews for pull requests to the `main` branch and for pushes to arbitrary other branches.
