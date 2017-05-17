---
title: WIO Tracker - LTE
category:
bzurl:
oldwikiname:
prodimagename:
surveyurl:
sku:
---

![](https://github.com/SeeedDocument/Wio_Tracker_LTE/blob/master/wio_tracker_lte_1.jpg?raw=true)

Wio Tracker (Wireless Input Output) is an open source gateway which enable faster IoT GPS solutions. It is Arduino and Grove compatible development boards that helps you track nearly any moving thing on the planet and then upload that data wirelessly. The Wio Tracker - LTE is the LTE version of Wio Tracker, so now we’ve got 2 versions of Wio Tracker, the 2G is like a warm-up product that bring the Wio Tracker series to the world, while the LTE (4G) version is the one that really brings some differences.

There are three main update of the Wio Tracker - LTE comparing to the 2G version. The first one, from the product name we can tell that it supports 4G communication, by inserting a 4G sim card and you can communicate with the board ever faster. The purpose of the Wio Tracker is tracking things, when it comes to GNSS, Wio Tracker - LTE supports totally 4 different systems - GPS, Beidou, GLONSS and Galileo, the QZSS is also supported. The third update is MCU, in the LTE version, we uses STM32 which is based on Cortex-M4, makes the LTE version 5 times faster than 2G version. What’s more, the flash and RAM have also been raised to 1Mbytes and 192+4k bytes.

Apart from the three main updates, the LTE version is almost the same as the 2G version. If your project is using the 2G version, it would be very easy to update to the LTE version because we have prepared transplantable and expansible AT command library. The Arduino and Grove compatibility allows for quicker development through numerous libraries and a supportive community. The GPS library which will be available with the board is not just limited to Arduino - it can function just as well if you chose to develop in C/C++. With 6 Grove connections available developers can plug in any combination of out 180+ sensors and actuators to make any project and solve any problem. Simplifying the prototyping and development phase is our goal.

The Wio Tracker - LTE is well suited for outdoor projects where the device can connect to the GPS satellites and provide a real-time location of the item it is attached to. The LTE provides a wide bandwidth which allows much faster interaction between the user and device. Some example projects could be a bicycle sharing service, tracking pets or livestock, locating a vehicle, or even keeping track of a child.


## Features

* Low-cost, low-power LTE connectivity optimized for broad- band IoT applications
* Worldwide LTE and UMTS/HSPA+
* Embedded power management unit (PMU) featuring ultra-low deep-sleep current consumption
* GPS/BeiDou/GLONASS/Galileo and QZSS
* Transplantable and expansible AT Command Library for Wio Tracker
* Arduino IDE compatible
* 6 Grove Connectors
* Nano SIM and TF card 2 in 1 socket


## Specification

| Item|Function|Value|
|--------------|-------------------------------------|-------|
|Microcontroller |Processor|STM32F405RG, ARM 32-bit Cortex-M4, 168MHZ|
||Flash Memory|1MB|
||SRAM|192+4KB|
||Operating Voltage|3.3V|
||DC Current per I/O Pin|7 mA|
|LTE|LTE Cat.1|FDD LTE: B2/B4/B12 WCDMA: B2/B4/B5|
|||AT Command: 3GPP TS27.007 and enhanced AT Commands|
||Data|LTE-FDD Max 10Mbps(DL) Max 5Mbps (UL)|
|||Protocol: TCP/UDP/PPP/FTP/HTTP/SSL/NTP/PING/QMI|
||SMS|Peer to Peer Message, SMS broadcast, Text and PDU mode|
||Audio|Echo cancellation, Noise elimination|
|GNSS|System|GPS/BeiDou/GLONASS/Galileo/QZSS|
||Precision|<2.5 m CEP|
|Peripheral|Grove|2 x Grove Digital Port|
|||2 x Analog Port|
|||1 x UART||||1 x I2C|
||Antenna|2 x LTE Antenna|
|||1 x GPS Antenna|
||Others|USB: Power supply and upload program|
|||JST 1.0 connecter for battery|
|||3.5mm Audio Jack|
|||MCU Reset Button, EC21 Power Button|
|||1 x User RGB LED SK6812|
|||Nano SIM and TF card 2 in 1 socket|
|Size|Length|54.7mm|
||Width|48.2mm|
||Weight||


## Application Ideas

* Pedometer
* Smart ski
* Smart two-wheeler
* Sharing bicycle
* Pet tracking machine
* Children location watch
* Smart watch
* Transportation location system
* Vehicle location system
* Property safety


!!!Tip
    Use Grove modules to expand your application

There are 6 Grove connects on board. If this is your first time to hear about Grove, please put had on [Grove System](http://wiki.seeed.cc/Grove_System/) for more details.
In brief, Groves is hundreds of sensor that in standard style, which is consist of sensors, actuators, displays as well as communication.

## Hardware Overview

![](https://github.com/SeeedDocument/Wio_Tracker_LTE/blob/master/wio_tracker_lte_v1._top.png?raw=true)

![](https://github.com/SeeedDocument/Wio_Tracker_LTE/blob/master/wio_tracker_lte_v1_buttom.png?raw=true)

!!!Tip
    If you want to use the on-board Grove connector, please use digitalWrite(12, HIGH) to open 3V3_B. Otherwise you can't provide power to Grove modules.
