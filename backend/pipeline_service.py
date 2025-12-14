from typing import Dict, Any
from graph_utils import is_dag


def analyze_pipeline(pipeline_data: Dict[str, Any]) -> Dict[str, Any]:
    nodes = pipeline_data.get('nodes', [])
    edges = pipeline_data.get('edges', [])
    
    return {
        'num_nodes': len(nodes),
        'num_edges': len(edges),
        'is_dag': is_dag(nodes, edges)
    }

