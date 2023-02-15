export const SUBQUERY_ENDPOINTS: { [chainId: string]: string } = {
  "osmosis-1": "",
  "osmo-test-4":
    "https://api.subquery.network/sq/Autonomy-Network/osmosis-testnet",
};

export const SUBQUERY_BACKUP_ENDPOINTS: { [chainId: string]: string } = {
  "osmosis-1": "",
  "osmo-test-4":
    "https://testnet.osmosis.subquery.autonomynetwork.alishahverdi.com/",
};

export const REGISTRY_ADDRESSES: { [chainId: string]: string } = {
  "osmosis-1": "",
  "osmo-test-4":
    "osmo1wuuyz9tlazx96v9vl8q9q9cmqwz7z72kyhcqu0nuauszgkxa572ss60ps4",
};

export const WRAPPER_ADDRESSES: { [chainId: string]: string } = {
  "osmosis-1": "",
  "osmo-test-4":
    "osmo14pcgaxpx4x34fr0dxc5p6fw2aww84wrgycykkctelhv4xrg4ytgq3jjdua",
};
export const ENABLE_AUTONOMY = true;
// process.env.NEXT_PUBLIC_ENABLE_AUTONOMY === "enabled";
