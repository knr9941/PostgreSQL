rs.initiate(
  {
    _id: "replconfig01",
    configsvr: true,
    members: [
      { _id : 0, host : "{{ config_servers }}:27017" },
    ]
  }
)
