# tron & anyswap contract
 https://github.com/tronprotocol/java-tron.git



 ## 遵循TRC20协议，兼容ERC-20协议;所以合约还是依赖于之前提供参照的ERC20合约

 https://tronprotocol.github.io/documentation-zh/contracts/trc20

## 遇上如下问题待验证：

1.TRC-20技术标准中无function decimals() external view returns (uint8);
而是直接定义常量uint8 public constant decimals = 6;，需验证AnyswapV6TRC20.sol是否可行

2.合约采用tronbox编译或者是nile测试网直接编译（https://nile.tronscan.org/#/contracts/contract-compiler）均会如下报错：

Compiled error: [{"component":"general","formattedMessage":"Internal exception in StandardCompiler::compile: /solidity/libsolidity/interface/CompilerStack.cpp(104): Throw in function solidity::frontend::CompilerStack::CompilerStack(ReadCallback::Callback)\nDynamic exception type: boost::wrapexcept\nstd::exception::what: You shall not have another CompilerStack aside me.\n[solidity::util::tag_comment*] = You shall not have another CompilerStack aside me.\n","message":"Internal exception in StandardCompiler::compile: /solidity/libsolidity/interface/CompilerStack.cpp(104): Throw in function solidity::frontend::CompilerStack::CompilerStack(ReadCallback::Callback)\nDynamic exception type: boost::wrapexcept\nstd::exception::what: You shall not have another CompilerStack aside me.\n[solidity::util::tag_comment*] = You shall not have another CompilerStack aside me.\n","severity":"error","type":"InternalCompilerError"}]
