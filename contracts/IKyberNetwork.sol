pragma solidity ^0.5.2;


contract IKyberNetwork {
    address constant public ETHER_ADDRESS = 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE;

    function tradeWithHint(
        address src,
        uint256 srcAmount,
        address dest,
        address destAddress,
        uint256 maxDestAmount,
        uint256 minConversionRate,
        address walletId,
        bytes memory hint
    )
        public
        payable
        returns(uint);

    function getExpectedRate(
        address source,
        address dest,
        uint srcQty
    )
        public
        view
        returns (
            uint expectedPrice,
            uint slippagePrice
        );
}