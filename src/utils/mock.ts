export const makeLorem = (n: number = 1) => {
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, voluptatum. Perspiciatis repudiandae, ex, dolores dignissimos non dolorem minima, nobis esse neque atque aperiam explicabo obcaecati ipsa repellendus. Adipisci, ab animi!";
  return Array.from({ length: n }, () => lorem).join(" ");
};
