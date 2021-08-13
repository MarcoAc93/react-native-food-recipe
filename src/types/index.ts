export interface CategoryItemType {
  id:          number;
  name:        string;
  image:       number;
  duration:    string;
  serving:     number;
  isBookmark:  boolean;
  category:    string;
  author:      Author;
  ingredients: Ingredient[];
  viewers:     Viewer[];
}

export interface Author {
  profilePic: number;
  name:       string;
}

export interface Ingredient {
  id:          number;
  icon:        number;
  description: string;
  quantity:    string;
}

export interface Viewer {
  id:         number;
  profilePic: number;
}