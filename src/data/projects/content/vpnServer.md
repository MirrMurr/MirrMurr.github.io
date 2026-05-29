# Self-hosted VPN server

During university, it was inevitable to have a course that taught Windows programming basics, and for that the designated developer environment to use was Visual Studio (no, not the Code; the purple one).

<br />

The only problem was that I have already switched to Linux way earlier, and then by that time I was using a Macbook (and Visual Studio for Mac is a disaster...) So basically I had to make sure that I have access to a proper Windows machine.

<br />

Instead of switching my main computer to a Windows machine until the end of this course, I decided that I would keep the Windows machine at home, and somehow figure out how to connect to it remotely, using Remote Desktop.

The final peice of the puzzle was to use a VPN, but any, because macOS client only supported L2TP IPSec/PSK VPNs.

<br />

In short, I pulled out the Raspberry Pi that was used for my other projects, pulled a VPN server docker image onto it, and tried running it. Of course roadblocks were ahead:

- Even tho it was dockerized, the original image was not built for ARM CPU architecture, so I had to fork the repo and make my own Dockerfile that is built on top of the appropriate version of Raspbian.
- After the macOS Big Sur update, the VPN stopped working, so I had to debug it fully, which I ended up solving by a small little change:
  <pre>
  - sha2-truncbug=yes
  + sha2-truncbug=no
  </pre>