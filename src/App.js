function App() {
  return (
    <div>
      This is parent Component
      <ChildComponent
        name="Badu"
        age={34}
        food={["kanchi", "pelmeni"]}
        images={{
          profile:
            "https://fastly.picsum.photos/id/1077/300/300.jpg?hmac=c7s9EbUHIZn4bUD_xkYc7DndRJGdnkoApLqPmhCqpcg",
          avatar:
            "https://fastly.picsum.photos/id/419/300/600.jpg?hmac=m5TqMJwIxScdnw_RMU_PUvonwU6lzgLBaKsOWUkSFPw",
        }}
      />
    </div>
  );
}

export default App;

function ChildComponent(props) {
  return (
    <div>
      My name is {props.name} and I am {props.age} years old, My favourite food
      is : {props.food[0]} and {props.food[1]}
      <br />
      <img src={props.images.profile} /> <img src={props.images.avatar} />{" "}
    </div>
  );
}
