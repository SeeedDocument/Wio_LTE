Firmware
=========
This firmware is for Wio LTE board, before connect the board to computer, you need to press and hold BOOT0/button on the bottom of the board, when it access dfu mode use dfu-tool to upload firmware. <br>
```
dfu-util -d 0483:df11 -c 1 -i 0 -a 0 -s 0x08000000 -D <firmware>
```
