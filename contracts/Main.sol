// SPDX-License-Identifier: MIT
pragma solidity >= 0.4.21 <0.7.0;
pragma experimental ABIEncoderV2;

contract Main {
    

    //make a constructor that saves the creator to a variable
    
    struct RentInfo{
        string location;
        uint numGuests;
        string startDate;
        string endDate;
        uint price;
        bool expired;
        string passCode;
        uint id;
        address renterAddress;
        string[][] Rents;
        
    }
    
    struct RentOutInfo{
        string startDate;
        string endDate;
        string location;
        string passCode;
    }
    
    RentInfo[] Rents;
    mapping(address => RentInfo[]) personalRentables;
    mapping(address => RentOutInfo[]) personalRents;
    
    function createRentable(string memory location, uint numGuests, string memory startDate, string memory endDate, uint price, string memory passCode, address _address) public {
        string[][] memory emptyArr;
        RentInfo memory rent = RentInfo(location, numGuests, startDate, endDate, price, false, passCode, Rents.length, _address, emptyArr);
        Rents.push(rent);
        personalRentables[_address].push(rent);
    }

    
    function rent(string memory startDate, string memory endDate, uint id, address _address) public payable {
        string memory location = Rents[id].location;
        string memory passCode = Rents[id].passCode;
        RentOutInfo memory filledRentOutInfo = RentOutInfo(startDate, endDate, location, passCode);
        personalRents[_address].push(filledRentOutInfo);
        
        string[] memory arr = new string[](2);
        arr[0] = startDate;
        arr[1] = endDate;
        Rents[id].Rents.push(arr);
    }
    
    function takeDownRentable(uint _index) public {
        Rents[_index].expired = true;
    }
    
    function getRents(uint _index) public view returns (RentInfo memory) {
        return (Rents[_index]);
    }
    
    function getPersonalRents(uint _index, address _address) public view returns (RentOutInfo memory) {
        return (personalRents[_address][_index]);
    }
    
    function getPersonalRentables(uint _index, address _address) public view returns (RentInfo memory) {
        return (personalRentables[_address][_index]);
    }
    
    //Get counts
    function getRentCount() public view returns (uint) {
        return (Rents.length);
    }
    
    function getPersonalRentCount(address _address) public view returns (uint) {
        return (personalRents[_address].length);
    }
    
    function getPersonalRentablesCount(address _address) public view returns (uint) {
        return (personalRentables[_address].length);
    }
}