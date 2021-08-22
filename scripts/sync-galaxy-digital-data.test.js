const rewire = require("rewire")
const sync_galaxy_digital_data = rewire("./sync-galaxy-digital-data")
const getGalaxyDigitalVolunteerData = sync_galaxy_digital_data.__get__("getGalaxyDigitalVolunteerData")
const pullAirtableVolunteers = sync_galaxy_digital_data.__get__("pullAirtableVolunteers")
const createAirtableRecord = sync_galaxy_digital_data.__get__("createAirtableRecord")
const updateAirtableRecord = sync_galaxy_digital_data.__get__("updateAirtableRecord")
const syncVolunteerData = sync_galaxy_digital_data.__get__("syncVolunteerData")
// @ponicode
describe("getGalaxyDigitalVolunteerData", () => {
    test("0", async () => {
        await getGalaxyDigitalVolunteerData(16, 4)
    })

    test("1", async () => {
        await getGalaxyDigitalVolunteerData(4, 512)
    })

    test("2", async () => {
        await getGalaxyDigitalVolunteerData(2, 4)
    })

    test("3", async () => {
        await getGalaxyDigitalVolunteerData(10, 0)
    })

    test("4", async () => {
        await getGalaxyDigitalVolunteerData(16, 32)
    })

    test("5", async () => {
        await getGalaxyDigitalVolunteerData(Infinity, Infinity)
    })
})

// @ponicode
describe("pullAirtableVolunteers", () => {
    test("0", () => {
        let callFunction = () => {
            pullAirtableVolunteers()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("createAirtableRecord", () => {
    test("0", () => {
        let callFunction = () => {
            createAirtableRecord({ key5: -5.48 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            createAirtableRecord({ key5: 1 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            createAirtableRecord({ key5: 0 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            createAirtableRecord({ key5: 100 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            createAirtableRecord({ key5: -100 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            createAirtableRecord(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("updateAirtableRecord", () => {
    test("0", () => {
        let callFunction = () => {
            updateAirtableRecord({ key4: -5.48 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            updateAirtableRecord({ key4: 100 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            updateAirtableRecord({ key4: 0 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            updateAirtableRecord({ key4: 1 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            updateAirtableRecord({ key4: -100 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            updateAirtableRecord(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("syncVolunteerData", () => {
    test("0", async () => {
        await syncVolunteerData()
    })
})
