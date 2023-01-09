import { Heading } from "../heading/heading";
import { HelloWorldButton } from "../hello-world-button/hello-world-button";

export class HelloWorldPage {
    render() {
        const heading = Heading.render('hello world');
        new HelloWorldButton().render();
    }
}