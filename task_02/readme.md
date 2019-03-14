# Appium Lab

<!-- TOC -->

- [Setup](#setup)
  - [Android SDK](#android-sdk)
    - [Create the AVD](#create-the-avd)
  - [Verify the installation](#verify-the-installation)
  - [Inter HAXM](#inter-haxm)
  - [Commom error](#commom-error)
    - [npm needs root permission](#npm-needs-root-permission)
- [Helper](#helper)
  - [iOS](#ios)
- [Execution](#execution)

<!-- /TOC -->

## Setup

Install the appium:

```bash
npm install -g appium
```

Now install the project dependencies

```bash
npm install
```

### Android SDK

Download the [Android Studio](https://developer.android.com/studio#downloads), select the package according to your OS.

After download, add to PATH:

- Mac:

Edit the file '~./bash_profile' and add this lines:

```bash
# Java
export JAVA_HOME=`/usr/libexec/java_home -v 1.8`
export PATH=${JAVA_HOME}/bin:$PATH
# Android SDK
export ANDROID_HOME="ANDROID_SDK_PATH"
export PATH=$ANDROID_HOME/platform-tools:$PATH
export PATH=$ANDROID_HOME/tools:$PATH
```

After to setup the environment, you need to install some packages by the Android Studio:

1. Open the Android Studio and access the SDK Manager
2. Click in SDK Platform and install the Android 8.1 (API Level 27)
3. Click in SDK Tools and add:
   - Android Emulator
   - Android Platform-Tools
   - Android SDK tools
   - Intel x86 Emulator Accelerator (AHXM installer)

#### Create the AVD

> The avdmanager is a command line tool that allows you to create and manage Android Virtual Devices (AVDs) from the command line. An AVD lets you define the characteristics of an Android handset, Wear OS watch, or Android TV device that you want to simulate in the Android Emulator.

1. Open the Android Studio and access the AVD Manager
2. In the column action, click in download image

### Verify the installation

Install the apium doctor:

```bash
npm install -g appium-doctor
```

- iOS

```bash
appium-doctor --ios
```

- Android

```bash
appium-doctor --android
```

### Inter HAXM

> HAXM is a cross-platform hardware-assisted virtualization engine (hypervisor), widely used as an accelerator for Android Emulator and QEMU. It has always supported running on Windows and macOS, and has been ported to other host operating systems as well, such as Linux and NetBSD.

Download latest version from [Intel HAXM](https://github.com/intel/haxm/releases/latest).

### Commom error

#### npm needs root permission

You need to unlock permissions in your *home* directory

```bash
sudo chown -R $(whoami) ~/.npm
```

You also need write permissions to the *node_modules* directory

```bash
sudo chown -R $(whoami) /usr/local/lib/node_modules
```

## Helper

### iOS

CLI to help run an iOS emulator:

```bash
npm install -g start-ios-simulator
```

## Execution

Run the appium in server mode

```bash
appium
```

- Open the emulator

```bash
ANDROID_SDK_HOME/emulator/emulator -avd Android_Accelerated_Oreo
```

- Run the command

```bash
npm test
```

- Result

[![Execution Result](http://img.youtube.com/vi/R-7_UG_iblU/0.jpg)](http://www.youtube.com/watch?v=R-7_UG_iblU "http://img.youtube.com/vi/R-7_UG_iblU/0.jpg")
