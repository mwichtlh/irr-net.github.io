const RegistryList = [
{
    name: "AFRINIC",
    dns_name: "whois.afrinic.net",
    ftp_site: "ftp.afrinic.net/pub/dbase/",
    databases_mirrored: none,
    mirror_port_and_info: "whois.afrinic.net, port 43003",
    whois_location: "whois.afrinic.net",
    type_of_primary_data: "AFRINIC members",
    Contact_info: "irr@afrinic.net",
    NOC_info: "noc@afrinic.net",
},{
name: "ALTDB",
dns_name: "whois.altdb.net",
ftp_site: "ftp://ftp.altdb.net/pub/altdb/",
mirror_port_and_info: "whois.altdb.net, port 43",
whois_location: "whois.altdb.net",
type_of_primary_data: "free registry",
contact_info: "db-admin@altdb.net",

},{
name: "APNIC",
dns_name: "whois.apnic.net",
ftp_site: "ftp://ftp.apnic.net/pub/apnic/whois/ ",
databases_mirrored: none,
mirror_port_and_info: "whois.apnic.net, port 43",
whois_location: "whois.apnic.netF",
type_of_primary_data: "APNIC member objects",
contact_info: "apnic-dbm@apnic.net",
moc_info: "technical@apnic.net",

},{
name: "ARIN",
dns_name: "rr.arin.net",
ftp_site: "ftp://ftp.arin.net/pub/rr/",
databases_mirrored: none,
mirror_port_and_info: "rr.arin.net, port 43",
whois_location: "rr.arin.net",
contact_info: "703-227-0660",
moc_info: "noc@arin.net",

},{
name: "BELL",
dns_name: "whois.in.bell.ca",
ftp_site: "ftp://whois.in.bell.ca/bell.db.gz",
databases_mirrored: "AOLT,W, ARIN, LEVEL3, RADB, NTTCOM",
mirror_port_and_info: "whois.in.bell.ca, port 43",
whois_location: "whois.in.bell.ca",
type_of_primary_data: "Bell and Customer's objects",
contact_info: "irr-admin@bell.ca",
moc_info: "inoc@bell.ca, 416-215-5423",
},{
name: "BBOI",
dns_name: "irr.bboi.net",
ftp_site: "ftp://irr.bboi.net/bboi.db.gz",
databases_mirrored: "ALTD,B, ARIN, LEVEL3, NTTCOM, RADB",
mirror_port_and_info: "irr.bboi.net, port 43",
whois_location: "irr.bboi.net",
type_of_primary_data: "Customer's objects",
contact_info: "ipadmin@bb.bboi.net",
moc_info: "support@bboi.net"

},{
name: "CANARIE",
dns_name: "whois.canarie.ca",
ftp_site: ["https://whois.canarie.ca/dbase/canarie.db.gz",
"https://whois.canarie.ca/dbase/CURRENTSERIAL"],
mirror_port_and_info: "whois.canarie.ca, port 43003",
whois_location: "whois.canarie.ca",
type_of_primary_data: "CANARIE Network",
contact_info: "noc@canarie.ca",
moc_info: "noc@canarie.ca"

},{
name: "IDNIC",
dns_name: "https://idnic.net/service/whois/irr",
ftp_site: ["ftp://irr-mirror.idnic.net/idnic.db.gz",
"ftp://irr-mirror.idnic.net/IDNIC.CURRENTSERIAL"],
mirror_port_and_info: "irr.idnic.net, port 43, NRTM ver 3",
whois_location: "irr.idnic.net, port 43",
type_of_primary_data: "Indonesia Network Information Center",
contact_info: "hostmaster@idnic.net",
moc_info: "noc.info@apjii.or.id +628111768866"

},{
name: "JPIRR",
dns_name: "jpirr.nic.ad.jp",
ftp_site: "ftp://ftp.nic.ad.jp/jpirr/",
databases_mirrored: APNI,C, RADB, RIPE
mirror_port_and_info: "jpirr.nic.ad.jp, port 43",
whois_location: jpirr.nic.ad.jp
type_of_primary_data: IRR Data
contact_info: irr-admin@nic.ad.jp
moc_info: irr-admin@nic.ad.jp

},{
name: "LACNIC",
dns_name: "irr.lacnic.net",
ftp_site: "https://irr.lacnic.net/lacnic.db.gz"
https://irr.lacnic.net/LACNIC.CURRENTSERIAL,
databases_mirrored: none,
mirror_port_and_info: "unavailable",
whois_location: irr.lacnic.net
type_of_primary_data: LACNIC members
contact_info: hostmaster@lacnic.net

},{
name: "LEVEL3",
dns_name: "rr.Level3.net",
ftp_site: "ftp://rr.Level3.net/level3.db.gz",
databases_mirrored: AFRI,NIC, ALTDB, APNIC, ARIN,
BBOI, BELL, CANARIE, JPIRR,
LACNIC, NESTEGG, NTTCOM,
PANIX, RADB, REACH, RIPE,
RIPE-NONAUTH, TC, WCGDB
mirror_port_and_info: "rr.Level3.net, port 43",
whois_location: rr.Level3.net
contact_info: ipadmin@centurylink.com
moc_info: noc.coreip@centurylink.com = AS3356/3549
BBNMC@centurylink.com = AS209/22561/3561

},{
name: "NESTEGG",
dns_name: "whois.nestegg.net",
ftp_site: "ftp://ftp.nestegg.net/irr",
databases_mirrored: RADB,
mirror_port_and_info: "whois.nestegg.net, port 43",
whois_location: whois.nestegg.net
type_of_primary_data: Nestegg, LLC specific
contact_info: info@nestegg.com
moc_info: noc@nestegg.com

},{
name: "NTTCOM",
dns_name: "https://www.gin.ntt.net/support/policy/rr.cfm",
ftp_site: "ftp://rr1.ntt.net/nttcomRR/",
databases_mirrored: NTTC,OM LACNIC IDNIC RADB RIPE RIPE-NONAUTH
ALTDB BELL LEVEL3 APNIC JPIRR
ARIN BBOI TC AFRINIC
ARIN-WHOIS RPKI REGISTROBR
mirror_port_and_info: "rr.ntt.net, port 43",
whois_location: rr.ntt.net
type_of_primary_data: nttcom
contact_info: db-admin@rr.ntt.net
moc_info: noc@ntt.net

},{
name: "PANIX",
dns_name: "rrdb.access.net",
ftp_site: "ftp://ftp.panix.com/pub/rrdb",
databases_mirrored: RADB,
mirror_port_and_info: "rrdb.access.net, port 43",
whois_location: rrdb.access.net
type_of_primary_data: PANIX community
contact_info: routing-types@panix.com
moc_info: trouble@panix.com

},{
name: "RADB",
dns_name: "whois.radb.net",
ftp_site: "ftp://ftp.radb.net/radb/dbase",
databases_mirrored: LACN,IC, IDNIC, AFRINIC, RIPE, RIPE-NONAUTH,
BELL, APNIC, NTTCOM, ALTDB, PANIX, NESTEGG,
LEVEL3, REACH, ARIN,
JPIRR, BBOI, TC, CANARIE
mirror_port_and_info: "whois.radb.net, port 43",
whois_location: whois.radb.net
type_of_primary_data: general Internet community
contact_info: radb-support@merit.edu
moc_info: radb-support@merit.edu, +1-734-527-5776
Admin Info: db-admin@radb.net

},{
name: "REACH",
dns_name: "rr.telstraglobal.net",
ftp_site: "",
databases_mirrored: "RADB,"
mirror_port_and_info: "rr.telstraglobal.net, port 43",
whois_location: "rr.telstraglobal.net",
type_of_primary_data: "Route Objects"
contact_info: dbadmin@telstraglobal.net
moc_info: ipnoc@team.telstra.com

},{
name: "RIPE",
dns_name: "whois.ripe.net",
ftp_site: "ftp://ftp.ripe.net/ripe/dbase/",
databases_mirrored: AFRI,NIC, ARIN, APNIC, JPIRR, LACNIC, RADB
mirror_port_and_info: "4444, RIPE near real time mirror",
whois_location: "whois.ripe.net"
contact_info: ripe-dbm@ripe.net
moc_info: ops@ripe.net

},{
name: "TC",
dns_name: "whois.bgp.net.br",
ftp_site: "ftp://ftp.bgp.net.br/dbase",
databases_mirrored: ALTD,B, AOLTW, APNIC, ARIN, BBOI, BCNET, BELL
EPOCH, JPIRR, LEVEL3
NESTEGG, NTTCOM, PANIX
PEGASUS, RADB, REACH, RIPE, ROGERS
mirror_port_and_info: "irr.bgp.net.br, port 43",
whois_location: "whois.bgp.net.br, port 43"
type_of_primary_data: Brazilian networks and general Internet community
}]
