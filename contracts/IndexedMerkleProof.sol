pragma solidity ^0.5.2;


library IndexedMerkleProof {
    function verify(bytes memory proof, uint160 root, uint160 leaf, uint index) internal pure returns (bool) {
        uint160 computedHash = leaf;

        for (uint256 i = 0; i < proof.length; i++) {
            uint160 proofElement;
            assembly {
                proofElement := div(mload(add(proof, 32)), 0x1000000000000000000000000)
            }

            if (index & (1 << i) == 0) {
                // Hash(current computed hash + current element of the proof)
                computedHash = uint160(uint256(keccak256(abi.encodePacked(computedHash, proofElement))));
            } else {
                // Hash(current element of the proof + current computed hash)
                computedHash = uint160(uint256(keccak256(abi.encodePacked(proofElement, computedHash))));
            }
        }

        // Check if the computed hash (root) is equal to the provided root
        return computedHash == root;
    }
}