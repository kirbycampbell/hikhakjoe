import React from 'react';
import initialState from './Games'
 
export default function reducer(state, action) {
    switch (action.type) {
        case 1:
        return {initialState['1'] === 'X'}
    }
}