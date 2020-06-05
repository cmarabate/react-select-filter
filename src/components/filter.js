import React from "react";
import Select from "react-select";

const options = [
  { value: "books", label: "Books" },
  { value: "furniture", label: "Furniture" },
  { value: "music", label: "Music" }
];

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          name: "The Top Shop",
          category: "books",
          id: 1
        },
        {
          name: "Ancient Stuff",
          category: "furniture",
          id: 2
        },
        {
          name: "Second Bookshop",
          category: "books",
          id: 3
        },
        {
          name: "Sofas & Couches",
          category: "furniture",
          id: 4
        },
        {
          name: "Pitchfork",
          category: "music",
          id: 5
        }
      ],
      filteredItems: [],
      selectedOption: []
    };
  }
  componentDidMount() {
    this.setState({
      filteredItems: this.state.items
    });
  }
  handleChange = selectedOption => {
    this.setState({ selectedOption });

    console.log("wtf", selectedOption);

    if (selectedOption.length === 0) {
      this.setState({
        filteredItems: this.state.items
      });
    } else {
      let selectedOptionFilter = selectedOption.map(option => {
        return option.value;
      });
      const newFilteredItems = this.state.items.filter(item => {
        return selectedOptionFilter.includes(item.category);
      });

      this.setState({
        filteredItems: newFilteredItems
      });
      console.log(selectedOption);
    }
  };

  render() {
    const { selectedOption } = this.state;
    return (
      <div>
        <h2>Filter by:</h2>
        <Select
          isMulti
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
          isClearable={true}
        />
        <ul>
          {this.state.filteredItems.map(item => (
            <li key={item.id}>
              {item.name}&nbsp;&ndash;&nbsp;<span>{item.category}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Filter;
