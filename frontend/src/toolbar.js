import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '20px', backgroundColor: '#f5f5f5', borderBottom: '1px solid #e0e0e0' }}>
            <h2 style={{ margin: '0 0 15px 0', fontSize: '18px', color: '#333' }}>Node Palette</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='transform' label='Transform' />
                <DraggableNode type='filter' label='Filter' />
                <DraggableNode type='merge' label='Merge' />
                <DraggableNode type='split' label='Split' />
                <DraggableNode type='condition' label='Condition' />
            </div>
        </div>
    );
};
