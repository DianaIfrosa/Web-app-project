import { Category } from "./category";
import { Material } from "./material";
import { MaterialIdea } from "./material-idea";
import { PresentationVideo } from "./presentation-video";

export interface DIYIdea {
    id: number,
    name: string,
    description: string,
    time: number,
    presentationVideo: PresentationVideo,
    category: Category,
    materialsDIYIdeas: MaterialIdea[]
}
