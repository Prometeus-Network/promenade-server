const CollectionFactoryContract = {
  MAINNET_721_PRIVATE: '0xe5841838Dd7e522f217DfFBCEaef82F04EC649Cd', //FantomNFTFactoryPrivate
  MAINNET_721_PUBLIC: '0xCC7A2eC7A8A0564518fD3D2ca0Df8B2137626144', //FantomNFTFactory
  TESTNET_721_PRIVATE: '0xbDFeE1383AB4D18818201E1b8Ad495402C6fb1ae', //FantomNFTFactoryPrivate
  TESTNET_721_PUBLIC: '0xd0aB23F3D8012d86877c481262ed696E5dA35d76', //FantomNFTFactory
  MAINNET_1155_PRIVATE: '0x736Eae40AdFf88570b92378c97a0D11b44E1C953', //FantomArtFactoryPrivate
  MAINNET_1155_PUBLIC: '0x520DaB621f93F59d3557174280AB1B6d4FB8c956', //FantomArtFactory
  TESTNET_1155_PRIVATE: '0xbDFeE1383AB4D18818201E1b8Ad495402C6fb1ae', //FantomArtFactoryPrivate
  TESTNET_1155_PUBLIC: '0xd0aB23F3D8012d86877c481262ed696E5dA35d76', //FantomArtFactory

  //change addresses
  ABI: [
    {
      inputs: [{ internalType: 'address', name: '', type: 'address' }],
      name: 'exists',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'view',
      type: 'function'
    }
  ]
};

module.exports = CollectionFactoryContract;
