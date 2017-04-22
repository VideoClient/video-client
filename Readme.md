[![GitHub version](https://badge.fury.io/gh/VideoClient%2Fvideo-client.svg)](https://badge.fury.io/gh/VideoClient%2Fvideo-client)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
[![Build Status](https://travis-ci.org/VideoClient/video-client.svg?branch=master)](https://travis-ci.org/VideoClient/video-client)
[![Build status](https://ci.appveyor.com/api/projects/status/hnnu3h9va9u9uiik/branch/master?svg=true)](https://ci.appveyor.com/project/sunxfancy/video-client/branch/master)
[![Gitter](https://badges.gitter.im/VideoClient/video-client.svg)](https://gitter.im/VideoClient/video-client?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![Code Climate](https://codeclimate.com/github/VideoClient/video-client/badges/gpa.svg)](https://codeclimate.com/github/VideoClient/video-client)
[![codecov](https://codecov.io/gh/VideoClient/video-client/branch/master/graph/badge.svg)](https://codecov.io/gh/VideoClient/video-client)


![logo](app/icon/logo.png)


[![Join the chat at https://gitter.im/VideoClient/video-client](https://badges.gitter.im/VideoClient/video-client.svg)](https://gitter.im/VideoClient/video-client?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

A hackable video aggregator for multi-platform with many plugins.

There are many video aggregator for TV and iPad, but none for PC. So this project focus on building a video client for different video websites.

The plugins can improve the flexibility and user experience. It's easy to change and custom.

## Clone The Code

There are submodules for internal plugins. Please use `--recursive` to get all projects.

```sh
git clone --recursive https://github.com/VideoClient/video-client.git
```

## Build

Using `npm` to build this project. 

```
npm install
```

For all subprojects in `packages` dir, we should run `npm install` too.

## Run

Using `npm start` to run the app.


## Package

Using `electron-forge` package it:

```sh
npm run package         # build electron package
npm run package-all     # build for all platform
npm run make            # build native installer
```


## Native Installer

Only build for own platform, this system can not cross build. 
Linux need deb and rpm build tools:

```sh
sudo apt install fakeroot dpkg rpm
```