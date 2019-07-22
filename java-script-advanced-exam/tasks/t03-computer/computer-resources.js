class Computer {
    /**
     * @param ramMemory {Number}
     * @param cpuGHz {Number}
     * @param hddMemory {Number}
     */
    constructor(ramMemory, cpuGHz, hddMemory) {
        this.ramMemory = ramMemory;
        this.cpuGHz = cpuGHz;
        this.hddMemory = hddMemory;

        this.taskManager = [];
        this.installedPrograms = [];
    }

    installAProgram(name, requiredSpace) {
        if (this.hddMemory < requiredSpace) {
            throw Error('There is not enough space on the hard drive');
        }

        this.hddMemory -= requiredSpace;

        const newlyInstalledProgram = {
            name,
            requiredSpace,
        };
        this.installedPrograms.push(newlyInstalledProgram);

        return newlyInstalledProgram;
    }

    uninstallAProgram(name) {
        const programFound = this._findProgram(this.installedPrograms, name); //undefined if not found

        if (!programFound) { //undefined is falsy
            throw Error('Control panel is not responding');
        }

        this.hddMemory += programFound.requiredSpace;
        this.installedPrograms.splice(this.installedPrograms.indexOf(programFound), 1);
        return this.installedPrograms;
    }

    openAProgram(name) {
        const programFound = this._findProgram(this.installedPrograms, name);

        if (!programFound) {
            throw Error(`The ${name} is not recognized`);
        }

        if (this._findProgram(this.taskManager, name)) {
            throw Error(`The ${name} is already open`);
        }

        const programRamUsage = this._calculateProgramRamUsage(programFound.requiredSpace);

        if (programRamUsage + this._computerRamUsage > 100.00) {
            throw Error(`${programFound.name} caused out of memory exception`);
        }

        const programCpuUsage = this._calculateProgramCpuUsage(programFound.requiredSpace);
        if (programCpuUsage + this._computerCpuUsage > 100.00) {
            throw Error(`${programFound.name} caused out of cpu exception`)
        }

        const openedProgram = {
            name,
            ramUsage: programRamUsage,
            cpuUsage: programCpuUsage,
        };

        this.taskManager.push(openedProgram);
        return openedProgram;
    }

    taskManagerView() {
        if (this.taskManager.length === 0) {
            console.log('All running smooth so far');
        }

        //"Name - {programName} | Usage - CPU: {cpuUsage}%, RAM: {ramUsage}%"
        let result = '';
        this.taskManager.forEach(t => {
            result += `Name - ${t.name} | Usage - CPU: ${t.cpuUsage.toFixed(0)}%, RAM: ${t.ramUsage.toFixed(0)}%`;
            result += '\n';
        });

        return result.trim();
    }

    /**
     * @param object {Object} object, containing programs
     * @param name {String} program name
     * @returns undefined if program is not found or first program with given name
     */
    _findProgram(object, name) {
        return object.filter(program => program.name === name)[0];
    }

    _calculateProgramRamUsage(programRequiredSpace) {
        return (programRequiredSpace / this.ramMemory) * 1.5;
    }

    _calculateProgramCpuUsage(programRequiredSpace) {
        return ((programRequiredSpace / this.cpuGHz) / 500) * 1.5;
    }

    get _computerRamUsage() {
        return this.taskManager
            .map(openedProgram => openedProgram.ramUsage)
            .reduce((accumulator, currentElement) => accumulator += currentElement, 0);
    }

    get _computerCpuUsage() {
        return this.taskManager
            .map(openedProgram => openedProgram.cpuUsage)
            .reduce((accumulator, currentElement) => accumulator += currentElement, 0);
    }
}