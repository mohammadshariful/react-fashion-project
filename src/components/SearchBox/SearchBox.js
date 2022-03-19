import React, { useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";

const SearchBox = () => {
  const [searchText, setSearchText] = useState("");
  const searchHandler = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="mt-5">
      <InputGroup className="mb-3 w-75 mx-auto">
        <FormControl
          placeholder="Search Your Product"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={searchText}
          onChange={searchHandler}
        />
        <Button>Search</Button>
      </InputGroup>
    </div>
  );
};

export default SearchBox;
