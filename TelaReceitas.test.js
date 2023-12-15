import React from 'react';
import Receitas from './TelaReceitas';
import renderer, { act } from 'react-test-renderer';

describe('<TelaReceitas />', () => {
    it('Renderização Correta', () => {
        let tree;
        act(() => {
            tree = renderer.create(<Receitas />);
        });

        const instance = tree.root;
        expect(instance.children.length).toBeGreaterThan(0);
    });
})
