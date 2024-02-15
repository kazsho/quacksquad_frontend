/**
 * @jest-environment jsdom
 */


const renderDOM = require('../helpers/renderDOM')

let dom;
let document;

describe("index.html", () => {

    beforeEach(async () => {
        dom = await renderDOM('../index.html')
        document = await dom.window.document
    })

    // AS A service user,
    // I WANT to find a tool,
    // SO THAT I can borrow it.
    describe("when the page loads, it displays the necessary DOM elements", () => {

        it("has an appropriate title", () => {
            expect(document.title).toBe("Community Chest | Find a tool")
        })

        it("has a main heading", () => {
            const heading = document.querySelector('h1')
            expect(heading.textContent).toBe("Find a Tool")
        })

        it("has a form", () => {
            const form = document.querySelector('form')
            expect(form).toBeTruthy()
        })

        it("has a form input", () => {
            const input = document.querySelector('input')
            expect(input).toBeTruthy()
        })

        it("has a form submit button", () => {
            const button = document.querySelector('button')
            expect(button).toBeTruthy()
            expect(button.type).toBe("submit")
            expect(button.textContent).toBe("Search")
        })

    })

    describe("search results are displayed on the page", () => {
        mockSearchResults = [
            { tool_name: "Hammer", tool_id: 1, location_id: 1, price_per_day: 2, description: "A tool used for driving nails and breaking objects.", image_url: "hammer.jpg", status: "available" },
            { tool_name: "Screwdriver", tool_id: 2, location_id: 1, price_per_day: 3, description: "A tool used for turning screws.", image_url: "screwdriver.jpg", status: "available" },
            { tool_name: "Drill", tool_id: 3, location_id: 1, price_per_day: 5, description: "A tool used for drilling holes in various materials.", image_url: "drill.jpg", status: "available" }
        ]

        it("displays the fetched search results", () => {

            // Arrange
            jest.spyOn(window, 'fetchTools').mockResolvedValue(mockSearchResults)

            // Act
            document.getElementById('toolForm').dispatchEvent(new Event('submit'))

            // Assert
            const toolList = document.getElementById('toolList')

            expect(toolList.children.length).toBe(3)

            expect(toolList.children[0].querySelector('.tool-name').textContent).toBe("Hammer")
            expect(toolList.children[0].querySelector('.tool-description').textContent).toBe("A tool used for driving nails and breaking objects.")
            expect(toolList.children[0].querySelector('.tool-price').textContent).toBe("Price per day: £2.00")
            expect(toolList.children[0].querySelector('.tool-image').src).toBe("hammer.jpg")
            expect(toolList.children[0].querySelector('.tool-status').textContent).toBe("Status: available")

            expect(toolList.children[1].querySelector('.tool-name').textContent).toBe("Screwdriver")
            expect(toolList.children[1].querySelector('.tool-description').textContent).toBe("A tool used for turning screws.")
            expect(toolList.children[1].querySelector('.tool-price').textContent).toBe("Price per day: £3.00")
            expect(toolList.children[1].querySelector('.tool-image').src).toBe("screwdriver.jpg")
            expect(toolList.children[1].querySelector('.tool-status').textContent).toBe("Status: available")

            expect(toolList.children[2].querySelector('.tool-name').textContent).toBe("Drill")
            expect(toolList.children[2].querySelector('.tool-description').textContent).toBe("A tool used for drilling holes in various materials.")
            expect(toolList.children[2].querySelector('.tool-price').textContent).toBe("Price per day: £5.00")
            expect(toolList.children[2].querySelector('.tool-image').src).toBe("drill.jpg")
            expect(toolList.children[2].querySelector('.tool-status').textContent).toBe("Status: available")
        })

    })

    describe("search queries that return no results are handled with a polite message", () => {

        it("displays a polite message when no results are found", () => {

            // Arrange
            jest.spyOn(window, 'fetchTools').mockResolvedValue([])

            // Act
            document.getElementById('toolForm').dispatchEvent(new Event('submit'))

            // Assert
            const toolList = document.getElementById('toolList')

            expect(toolList.children.length).toBe(1)
            expect(toolList.children[0].textContent).toBe("No results found.")
        })

    })
    

})