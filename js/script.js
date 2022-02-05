const getDataFromJSON = async () => {
  try {
    const response = await fetch("../data.json");
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

getDataFromJSON();
