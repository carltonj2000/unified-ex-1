---
id: android1
title: Android
---

## Table of contents

Use scrcpy for mirroring android phone on windows/linux/mac.
The requires that ADB is up and running.
On Linux run ADB as root to save yourself a whole bunch of headaches.
If you run into issues unplug the USB, `Revoke USB debugging authorizations`.
Plug in the phone again and accept the on screen authorization.
You can then log out of root to run `adb` or `scrcpy`.
When `adb devices` is NOT run as root the adb output shows `unauthorized` as
root you see `device` and now `adb shell` works as root or a regular users.

## Android ADB Commands

| Command     | Details          |
| ----------- | ---------------- |
| adb devices | list adb devices |

## Android Development Install On Ubuntu 20.04

- download and installed Android Studio and the SDK following the instructions
  [here](https://developer.android.com/studio)
  and
  [here](https://developer.android.com/studio/install)
- installed udev rules by following instructions from
  [here](https://github.com/carltonj2000/android-udev-rules)

Skipped this on the latest install, instead added platform tools and add it
to the path.

- did `apt install adb` and `sudo usermod -aG plugdev $LOGNAME` as suggested
  from
  [here](https://developer.android.com/studio/run/device)
