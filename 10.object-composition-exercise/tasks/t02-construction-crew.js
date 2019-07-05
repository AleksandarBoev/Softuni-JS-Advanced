function hydrateWorker(workerObject) {
    if (!workerObject.dizziness) {
        return workerObject;
    }

    const hydrationNeeded = 0.1 * workerObject.weight * workerObject.experience;
    workerObject.levelOfHydrated += hydrationNeeded;
}

// const worker = { weight: 120,
//     experience: 20,
//     levelOfHydrated: 200,
//     dizziness: true };
//
// hydrateWorker(worker);
//
// console.log(worker);