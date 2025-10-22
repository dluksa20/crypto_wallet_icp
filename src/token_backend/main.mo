import HashMap "mo:base/HashMap";
import Debug "mo:base/Debug";
import Iter "mo:base/Iter";
import Principal "mo:base/Principal";


persistent actor class Token(ownerPrincipal : Text) {

  stable let totalSuply : Nat = 1000000000;
  // 'dfx identity get-principal' string needs to be changed if run on different computer
  stable let owner : Principal = Principal.fromText(ownerPrincipal);
  stable let symbol : Text = "DLUK";

  transient var balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash);
  var balanceEntries: [(Principal, Nat)] = [];
  Debug.print(debug_show (balanceEntries));


  if (balances.size() < 1){
      balances.put(owner, totalSuply);
  };
  

  public query func balanceOf(who: Principal) : async Nat {
    let balance : Nat = switch(balances.get(who)) {
      case null 0;  
      case(?result) result;
    };

    return balance;
  };

  public query func tokenSymbol() : async Text {
    return symbol;
  };

  public shared(msg) func payOut() : async Text {
    Debug.print("Caller ID:" # debug_show (msg.caller));
    if (balances.get(msg.caller) == null) {
      let amount = 10000;
      let result = await transfer(msg.caller, amount);
      return result;
    } else {
      return "Already Claimed!"
    }
  };


  public shared(msg) func transfer(to: Principal, amount: Nat) : async Text {

    Debug.print("Trasfer to: " # debug_show (to));
    Debug.print("Amount: " # debug_show (amount));
    Debug.print("Transfer from: " # debug_show (msg.caller));

    let fromBalance = await balanceOf(msg.caller);
    if (fromBalance > amount){

      let newFromBalance : Nat =  fromBalance - amount;
      balances.put(msg.caller, newFromBalance);

      let toBalance = await balanceOf(to);
      let newToBalance = toBalance + amount;
      balances.put(to, newToBalance);
      return "Success";
    } else {
      return "Insufficient funds"
    }
    
  };


  system func preupgrade() {
    balanceEntries := Iter.toArray(balances.entries())
  };

  system func postupgrade() {
     balances := HashMap.fromIter<Principal, Nat>(balanceEntries.vals(),1,Principal.equal, Principal.hash);
    if (balances.size() < 1){
      balances.put(owner, totalSuply);
    };
  };

}