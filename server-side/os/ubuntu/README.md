# Ubuntu

[This guide](https://www.thefanclub.co.za/how-to/how-secure-ubuntu-1604-lts-server-part-1-basics) ([(https://www.thefanclub.co.za/how-to/how-secure-ubuntu-1604-lts-server-part-1-basics](https://www.thefanclub.co.za/how-to/how-secure-ubuntu-1604-lts-server-part-1-basics)) is excellent for getting started on securing Ubuntu 16.04 LTS Server. It also works for Ubuntu 18.04 LTS, with slight adjustments; for desktop installations of the same OSes, skipping Apache- and other server-related steps; and probably for other Ubuntu versions and configurations as well.

Listed below are links to some configuration files for Ubuntu 18.04 LTS, partially implementing the recommendations from the page linked above. The path given for each file is the path where the file should be placed on the target Ubuntu system.

* [/etc/fstab](./fstab) - The line to take note of is `tmpfs     /run/shm     tmpfs     defaults,noexec,nosuid     0     0`. The purpose of this line is to secure shared memory. Add this line to whatever else is in `/etc/fstab` initially after Ubuntu is installed.
* [/etc/sysctl.conf](./sysctl.conf) - You should probably replace the entire contents of this file with what I have here. Almost every setting in the original file needs to be changed, unfortunately. These settings increase network security, among other things.
* [/etc/host.conf](./host.conf) - The `nospoof on` clause apparently doesn't work anymore in Ubuntu 18.04. The only line I actually changed was `order hosts,bind` to `order bind,hosts`. I believe this helps prevent DNS spoofing for old C programs, but that's about it.
* [/etc/ssh/sshd_config](./sshd_config) - SSH server config. The only two lines I modified are the addition of the last two: `Protocol 2` and `PermitRootLogin no`. These help secure SSH access to the server.
