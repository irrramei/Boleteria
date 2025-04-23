import { useState, useEffect, forwardRef } from "react";
import { Link } from "react-router-dom";

const Navbar = forwardRef(({ onSearch }, ref) => {
  const [search, setSearch] = useState("");

  useEffect(() => {}, [search, onSearch]);

  const handleInputChange = (evt) => {
    setSearch(evt.target.value);
  };

  const handleInputKeyDown = (evt) => {
    if (evt.key === "Enter") {
      onSearch(search);
    }
  };

  return (
    <div
      ref={ref}
      style={{
        marginBottom: 14,
        width: "100%",
        display: "flex",
      }}
    >
      <div style={{ flex: 1, display: "flex" }}>
        <p style={{ fontSize: 24, fontWeight: "bold" }}>Mi Boletera</p>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <input
          placeholder="Find your favorite event"
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          value={search}
          style={{
            fontSize: 16,
            padding: "6px 12px",
            borderRadius: 4,
            border: "none",
            width: 200,
          }}
        />
         <Link to="/profile/my-info" style={{
                    marginLeft: 24,
                    color: '#fff',
                    textDecoration: 'none'
                }}>My Profile</Link>
      </div>
    </div>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
