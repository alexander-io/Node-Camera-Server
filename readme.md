# Node.js Camera Server
4.13.0-32-generic #35~16.04.1-Ubuntu

Architecture:          x86_64
CPU op-mode(s):        32-bit, 64-bit
Byte Order:            Little Endian
CPU(s):                8
On-line CPU(s) list:   0-7
Thread(s) per core:    2
Core(s) per socket:    4
Socket(s):             1
NUMA node(s):          1
Vendor ID:             GenuineIntel
CPU family:            6
Model:                 158
Model name:            Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz
Stepping:              9
CPU MHz:               2800.000
CPU max MHz:           3800.0000
CPU min MHz:           800.0000
BogoMIPS:              5616.00
Virtualization:        VT-x
L1d cache:             32K
L1i cache:             32K
L2 cache:              256K
L3 cache:              6144K
NUMA node0 CPU(s):     0-7

## installation
```bash
# ensure nodejs is  installed
node --version
# ensure npm is installed
npm --version
# ensure git is installed
git --version
# ensure streamer is installed
sudo apt install streamer -y
# clone project repository
git clone https://github.com/alexander-io/Node_Camera_Server.git
# move to project directory
cd Node_Camera_Server
# install npm packages
npm install
# run script
node x.js
# navigate browser to localhost:8080
# navigate to ipaddress:8080 on a mobile device that's connected to the same local area  network as the server machine, where ipaddress is the inet addr of your server
```
