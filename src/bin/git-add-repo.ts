#! /usr/bin/env node

import { config, WithRegistryConfiguration, withRegistry } from '../config';
import { Command } from 'commander';
import { fromInput } from '../data';
import { leveldbStore } from '../data/leveldb-store';

const addRepo = ({
    registry,
    workspacesDefault
}: WithRegistryConfiguration) => {
    const program = new Command();
    program.option(
        '-w, --workspace <name>',
        'with workspace',
        workspacesDefault
    );
    program.argument('<urlConnection>');
    program.action(async (urlConnection, opts) => {
        const workspace = opts.workspace;
        const item = fromInput({ urlConnection, workspace });
        if (!item) return;

        await leveldbStore(registry).add(item);
        console.info(`registered repo`, { workspace, urlConnection });
    });
    program.parse(process.argv);
};

config().then(withRegistry).then(addRepo);
